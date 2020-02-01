const { readdirSync, statSync, existsSync, mkdirSync } = require('fs');
const CWebp = require('cwebp').CWebp;
const os = require('os');

const picRegExp = /.jpg|.png/i;
const sourceImageLocation = '../images';
const outputImageLocation = '../images'
const { join } = require('path');
const SEPARATOR = (os.type() === 'Linux') ? '/' : '\\';

const getPicNamesInFolder = param => readdirSync(param)
    .filter(image => picRegExp.test(image));

const getDirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())

const getOutputName = (fileName, outPath) => {
  fileName = fileName.substring(0, fileName.lastIndexOf('.'));

  return `${outPath}${SEPARATOR}${fileName}.webp`;
};

const convert= (imgPath, outPath) => {
  const pics = getPicNamesInFolder(imgPath);
  
  pics.forEach(picName => {
    const encoder = CWebp(`${imgPath}${SEPARATOR}${picName}`);
    const outputFileName = getOutputName(picName, outPath)
    
    if (!existsSync(outPath)){
      mkdirSync(outPath, { recursive: true });
    }

    encoder.write(outputFileName, function(err) {
      console.log(err || `${picName} encoded successfully`);
    });
  })

  getDirs(imgPath).forEach(folderName => convert(`${imgPath}${SEPARATOR}${folderName}`,
      `${outPath}${SEPARATOR}${folderName}`));
};

const pathSourceImage = join(__dirname, '..', 'src', sourceImageLocation);
const pathOutpuImage = join(__dirname, '..', 'src', outputImageLocation);
convert(pathSourceImage, pathOutpuImage);
 