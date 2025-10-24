import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  robots?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://chromostudio.ro';
  private defaultImage = 'https://chromostudio.ro/images/cover.jpg';
  private siteName = 'Chromosome Studio Architecture';

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {}

  updateSEO(seoData: SEOData): void {
    // Update page title
    if (seoData.title) {
      this.title.setTitle(seoData.title);
    }

    // Update basic meta tags
    this.updateOrCreateMetaTag('description', seoData.description);
    this.updateOrCreateMetaTag('keywords', seoData.keywords);
    this.updateOrCreateMetaTag('robots', seoData.robots || 'index, follow');

    // Update Open Graph meta tags
    this.updateOrCreateMetaTag('og:title', seoData.ogTitle || seoData.title, 'property');
    this.updateOrCreateMetaTag('og:description', seoData.ogDescription || seoData.description, 'property');
    this.updateOrCreateMetaTag('og:image', seoData.ogImage || this.defaultImage, 'property');
    this.updateOrCreateMetaTag('og:url', seoData.ogUrl || this.getCurrentUrl(), 'property');
    this.updateOrCreateMetaTag('og:type', 'website', 'property');
    this.updateOrCreateMetaTag('og:site_name', this.siteName, 'property');

    // Update Twitter Card meta tags
    this.updateOrCreateMetaTag('twitter:card', 'summary_large_image');
    this.updateOrCreateMetaTag('twitter:title', seoData.twitterTitle || seoData.title);
    this.updateOrCreateMetaTag('twitter:description', seoData.twitterDescription || seoData.description);
    this.updateOrCreateMetaTag('twitter:image', seoData.twitterImage || seoData.ogImage || this.defaultImage);

    // Update canonical URL
    this.updateCanonicalUrl(seoData.canonical || this.getCurrentUrl());
  }

  private updateOrCreateMetaTag(name: string, content: string, attribute: string = 'name'): void {
    if (!content) return;

    const selector = `${attribute}="${name}"`;
    const existingTag = this.meta.getTag(selector);

    if (existingTag) {
      this.meta.updateTag({ [attribute]: name, content });
    } else {
      this.meta.addTag({ [attribute]: name, content });
    }
  }

  private updateCanonicalUrl(url: string): void {
    // Remove existing canonical link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add new canonical link
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }

  private getCurrentUrl(): string {
    return `${this.baseUrl}${this.router.url}`;
  }

  // Predefined SEO configurations for different page types
  getHomeSEO(): SEOData {
    return {
      title: 'Chromosome Studio Architecture - Contemporary Architecture in Timișoara',
      description: 'Professional architecture studio in Timișoara, Romania. Specializing in residential design, interior design, architectural rendering, and contemporary minimalist architecture. Led by architect Dana Cioran.',
      keywords: 'architecture timisoara, birou arhitectura, contemporary architecture, residential design, interior design, architectural rendering, Dana Cioran, chromosome architecture, chromostudio',
      ogTitle: 'Chromosome Studio Architecture - Contemporary Architecture in Timișoara',
      ogDescription: 'Professional architecture studio specializing in residential design, interior design, and contemporary architecture. View our portfolio of modern minimalist projects.',
      canonical: this.baseUrl
    };
  }

  getProjectsSEO(): SEOData {
    return {
      title: 'Architecture Projects - Chromosome Studio Portfolio',
      description: 'Explore our portfolio of contemporary architecture projects including residential houses, interior design, and commercial spaces in Timișoara and Romania.',
      keywords: 'architecture projects, residential architecture, contemporary houses, interior design projects, timisoara architecture, modern houses romania',
      ogTitle: 'Architecture Projects - Chromosome Studio Portfolio',
      ogDescription: 'Explore our portfolio of contemporary architecture projects including residential houses, interior design, and commercial spaces.',
      canonical: `${this.baseUrl}/projects`
    };
  }

  getContactSEO(): SEOData {
    return {
      title: 'Contact - Chromosome Studio Architecture Timișoara',
      description: 'Contact Chromosome Studio Architecture in Timișoara. Get in touch with architect Dana Cioran for your architecture and interior design projects.',
      keywords: 'contact architect timisoara, architecture services, Dana Cioran contact, chromosome studio contact',
      ogTitle: 'Contact - Chromosome Studio Architecture',
      ogDescription: 'Get in touch with architect Dana Cioran for your architecture and interior design projects in Timișoara.',
      canonical: `${this.baseUrl}/contact`
    };
  }

  getAboutSEO(): SEOData {
    return {
      title: 'About - Architect Dana Cioran | Chromosome Studio',
      description: 'Meet architect Dana Cioran, founder of Chromosome Studio Architecture. Learn about our approach to contemporary architecture and interior design in Timișoara.',
      keywords: 'Dana Cioran architect, about chromosome studio, timisoara architect, contemporary architecture philosophy',
      ogTitle: 'About - Architect Dana Cioran | Chromosome Studio',
      ogDescription: 'Meet architect Dana Cioran and learn about our approach to contemporary architecture and interior design.',
      canonical: `${this.baseUrl}/about`
    };
  }

  getProjectSEO(projectName: string, projectData?: any): SEOData {
    const cleanProjectName = this.cleanProjectName(projectName);
    const projectTitle = projectData?.sideDescription?.title || cleanProjectName;
    
    return {
      title: `${projectTitle} - Architecture Project | Chromosome Studio`,
      description: `${projectTitle} - Contemporary architecture project by Chromosome Studio. ${projectData?.sideDescription?.body?.EN || 'Explore this modern architectural design in our portfolio.'}`,
      keywords: `${cleanProjectName}, architecture project, contemporary design, residential architecture, chromosome studio, timisoara architect`,
      ogTitle: `${projectTitle} - Architecture Project`,
      ogDescription: `Contemporary architecture project by Chromosome Studio - ${projectTitle}`,
      ogImage: projectData?.path ? `${this.baseUrl}/${projectData.path}.jpg` : this.defaultImage,
      canonical: `${this.baseUrl}/projects/${projectName}`
    };
  }

  private cleanProjectName(name: string): string {
    return name.split('%20').join(' ').split('%').join(' ').toLowerCase()
      .split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  // Method to add structured data (JSON-LD)
  addStructuredData(data: any): void {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  // Get business structured data
  getBusinessStructuredData(): any {
    return {
      "@context": "https://schema.org",
      "@type": "ArchitecturalPractice",
      "name": "Chromosome Studio Architecture",
      "alternateName": "Chromostudio",
      "description": "Professional architecture studio specializing in contemporary residential design, interior design, and architectural visualization.",
      "url": "https://chromostudio.ro",
      "telephone": "+40744691187",
      "email": "chromosome.architecture@gmail.com",
      "founder": {
        "@type": "Person",
        "name": "Dana Cioran",
        "jobTitle": "Architect"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bulevardul General Ion Dragalina nr 24",
        "addressLocality": "Timișoara",
        "addressRegion": "Timiș",
        "addressCountry": "Romania"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "45.74689451831178",
        "longitude": "21.210340820656977"
      },
      "sameAs": [
        "https://www.instagram.com/chromosome.architecture/"
      ],
      "serviceArea": {
        "@type": "Place",
        "name": "Romania"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Architectural Design",
            "description": "Contemporary residential and commercial architecture design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Design",
            "description": "Modern interior design and space planning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Architectural Visualization",
            "description": "3D rendering and architectural visualization services"
          }
        }
      ]
    };
  }

  // Get project structured data
  getProjectStructuredData(projectData: any): any {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": projectData.sideDescription?.title,
      "description": projectData.sideDescription?.body?.EN,
      "creator": {
        "@type": "Person",
        "name": "Dana Cioran",
        "@id": "https://chromostudio.ro/about"
      },
      "provider": {
        "@type": "Organization",
        "name": "Chromosome Studio Architecture",
        "@id": "https://chromostudio.ro"
      },
      "image": `https://chromostudio.ro/${projectData.path}.jpg`,
      "url": `https://chromostudio.ro/projects/${projectData.text.toLowerCase()}`
    };
  }
}