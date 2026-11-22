import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html'
})
export class AppComponent {
  menuOpen = signal(false);
  activeFilter = signal('All');
  filters = ['All', 'Full-stack', 'Frontend', 'ERP'];
  projects = [
    { title: 'Platform Component List Portal', category: 'Full-stack', summary: 'Enterprise portal featuring component dashboards, comparison reports, metrics and graphical insights.', stack: ['Angular 16', '.NET Core Web API', 'SQL Server', 'MongoDB'], role: 'Lead II – Software Engineering' },
    { title: 'BugAssist', category: 'Full-stack', summary: 'Application for sighting creation, comparison reports, graphical analysis and defect logging.', stack: ['Vue.js', '.NET Core Web API', 'SQL Server', 'MongoDB'], role: 'Lead II – Software Engineering' },
    { title: 'Issue Life / Excursion Management', category: 'Frontend', summary: 'Enterprise workflow application supporting issue lifecycle and excursion management.', stack: ['Angular 14', '.NET Web API', 'SQL Server'], role: 'Lead I – Software Engineering' },
    { title: 'John Deere – Dealer / Vendor CMS', category: 'Frontend', summary: 'Dealer and vendor content-management solution with frontend leadership and backend integration.', stack: ['Angular 14', 'Java Web API', 'MySQL'], role: 'Team Lead – Frontend' },
    { title: 'Sea Food ERP', category: 'ERP', summary: 'Business application covering purchase, sales, production, inventory and HRMS workflows.', stack: ['C#', 'SQL Server 2012', 'Crystal Reports'], role: 'Project Coordinator & Developer' },
    { title: 'HR & Payroll – Sayma Dynamics', category: 'ERP', summary: 'Automated payroll workflows, reducing manual processing errors by 30% while improving accuracy and turnaround time. Improved UI responsiveness and usability, and implemented secure API integrations and enterprise authentication.', stack: ['API Integrations', 'Enterprise Authentication', 'UI Performance Optimization', 'Workflow Automation'], role: 'Payroll automation & enterprise integration' }
  ];
  get visibleProjects() {
    return this.activeFilter() === 'All' ? this.projects : this.projects.filter(p => p.category === this.activeFilter());
  }
  setFilter(filter: string) { this.activeFilter.set(filter); }
  toggleMenu() { this.menuOpen.update(isOpen => !isOpen); }
  closeMenu() { this.menuOpen.set(false); }
}
