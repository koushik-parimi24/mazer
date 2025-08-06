// E-commerce Dashboard JavaScript
class EcommerceDashboard {
    constructor() {
        this.data = null;
        this.charts = {};
        this.init();
    }

    async init() {
        try {
            await this.loadData();
            this.renderDashboard();
            this.initializeCharts();
        } catch (error) {
            console.error('Error initializing dashboard:', error);
            // Use fallback data
            this.useFallbackData();
        }
    }

    async loadData() {
        try {
            const response = await fetch('/assets/static/js/data.json');
            if (!response.ok) {
                throw new Error('Failed to load data');
            }
            this.data = await response.json();
        } catch (error) {
            console.error('Error loading data:', error);
            this.useFallbackData();
        }
    }

    useFallbackData() {
        this.data = {
            dashboard: {
                stats: {
                    totalSales: { value: 2845000, currency: "USD", change: 12.5, trend: "up" },
                    totalOrders: { value: 15420, change: 8.2, trend: "up" },
                    averageOrderValue: { value: 184.50, currency: "USD", change: -2.1, trend: "down" },
                    customerSatisfaction: { value: 4.8, maxValue: 5, change: 0.3, trend: "up" }
                },
                recentOrders: [
                    {
                        id: "ORD-001",
                        customer: { name: "Sarah Johnson", email: "sarah.j@email.com", avatar: "assets/static/images/faces/1.jpg" },
                        product: "Premium Wireless Headphones",
                        amount: 299.99,
                        status: "completed",
                        date: "2024-01-15T10:30:00Z"
                    },
                    {
                        id: "ORD-002",
                        customer: { name: "Michael Chen", email: "mchen@email.com", avatar: "assets/static/images/faces/2.jpg" },
                        product: "Smart Fitness Watch",
                        amount: 199.99,
                        status: "processing",
                        date: "2024-01-15T09:15:00Z"
                    },
                    {
                        id: "ORD-003",
                        customer: { name: "Emily Rodriguez", email: "emily.r@email.com", avatar: "assets/static/images/faces/3.jpg" },
                        product: "Portable Bluetooth Speaker",
                        amount: 89.99,
                        status: "shipped",
                        date: "2024-01-15T08:45:00Z"
                    },
                    {
                        id: "ORD-004",
                        customer: { name: "David Kim", email: "dkim@email.com", avatar: "assets/static/images/faces/4.jpg" },
                        product: "Wireless Charging Pad",
                        amount: 49.99,
                        status: "pending",
                        date: "2024-01-15T08:20:00Z"
                    },
                    {
                        id: "ORD-005",
                        customer: { name: "Lisa Thompson", email: "lisa.t@email.com", avatar: "assets/static/images/faces/5.jpg" },
                        product: "Smart Home Hub",
                        amount: 159.99,
                        status: "completed",
                        date: "2024-01-15T07:55:00Z"
                    }
                ],
                topProducts: [
                    {
                        name: "Premium Wireless Headphones",
                        category: "Audio",
                        sales: 1250,
                        revenue: 374987.50,
                        rating: 4.8,
                        image: "assets/static/images/samples/1.png"
                    },
                    {
                        name: "Smart Fitness Watch",
                        category: "Wearables",
                        sales: 980,
                        revenue: 195980.20,
                        rating: 4.6,
                        image: "assets/static/images/samples/2.png"
                    },
                    {
                        name: "Portable Bluetooth Speaker",
                        category: "Audio",
                        sales: 750,
                        revenue: 67492.50,
                        rating: 4.7,
                        image: "assets/static/images/samples/3.png"
                    },
                    {
                        name: "Wireless Charging Pad",
                        category: "Accessories",
                        sales: 1200,
                        revenue: 59988.00,
                        rating: 4.5,
                        image: "assets/static/images/samples/4.png"
                    },
                    {
                        name: "Smart Home Hub",
                        category: "Smart Home",
                        sales: 450,
                        revenue: 71995.50,
                        rating: 4.9,
                        image: "assets/static/images/samples/5.png"
                    }
                ],
                salesByCategory: [
                    { category: "Audio", sales: 442480.00, percentage: 35 },
                    { category: "Wearables", sales: 195980.20, percentage: 15 },
                    { category: "Smart Home", sales: 71995.50, percentage: 12 },
                    { category: "Accessories", sales: 59988.00, percentage: 10 },
                    { category: "Computers", sales: 89982.30, percentage: 8 },
                    { category: "Others", sales: 374574.00, percentage: 20 }
                ],
                monthlySales: [
                    { month: "Jan", sales: 2850000, orders: 15420 },
                    { month: "Feb", sales: 3200000, orders: 16800 },
                    { month: "Mar", sales: 2950000, orders: 15200 },
                    { month: "Apr", sales: 3100000, orders: 16200 },
                    { month: "May", sales: 3400000, orders: 17800 },
                    { month: "Jun", sales: 3600000, orders: 18500 },
                    { month: "Jul", sales: 3800000, orders: 19200 },
                    { month: "Aug", sales: 3950000, orders: 19800 },
                    { month: "Sep", sales: 4100000, orders: 20500 },
                    { month: "Oct", sales: 4250000, orders: 21200 },
                    { month: "Nov", sales: 4400000, orders: 22000 },
                    { month: "Dec", sales: 4600000, orders: 23000 }
                ],
                customerDemographics: [
                    { ageGroup: "18-24", percentage: 15, color: "#435ebe" },
                    { ageGroup: "25-34", percentage: 35, color: "#38b2ac" },
                    { ageGroup: "35-44", percentage: 25, color: "#f59e0b" },
                    { ageGroup: "45-54", percentage: 15, color: "#ef4444" },
                    { ageGroup: "55+", percentage: 10, color: "#8b5cf6" }
                ],
                recentMessages: [
                    {
                        id: 1,
                        sender: { name: "Customer Support", avatar: "assets/static/images/faces/1.jpg", status: "online" },
                        message: "New order #ORD-006 has been placed",
                        time: "2 min ago",
                        unread: true
                    },
                    {
                        id: 2,
                        sender: { name: "Inventory Manager", avatar: "assets/static/images/faces/2.jpg", status: "online" },
                        message: "Low stock alert: Premium Headphones",
                        time: "15 min ago",
                        unread: true
                    },
                    {
                        id: 3,
                        sender: { name: "Marketing Team", avatar: "assets/static/images/faces/3.jpg", status: "offline" },
                        message: "New campaign launched successfully",
                        time: "1 hour ago",
                        unread: false
                    },
                    {
                        id: 4,
                        sender: { name: "Sales Manager", avatar: "assets/static/images/faces/4.jpg", status: "online" },
                        message: "Monthly sales target achieved!",
                        time: "2 hours ago",
                        unread: false
                    }
                ]
            }
        };
    }

    renderDashboard() {
        this.renderStats();
        this.renderRecentOrders();
        this.renderTopProducts();
        this.renderRecentMessages();
    }

    renderStats() {
        const stats = this.data.dashboard.stats;
        
        this.updateStatCard('total-sales', stats.totalSales);
        this.updateStatCard('total-orders', stats.totalOrders);
        this.updateStatCard('average-order', stats.averageOrderValue);
        this.updateStatCard('customer-satisfaction', stats.customerSatisfaction);
    }

    updateStatCard(elementId, data) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const valueElement = element.querySelector('.stat-value');
        const changeElement = element.querySelector('.stat-change');

        if (valueElement) {
            if (data.currency) {
                valueElement.textContent = this.formatCurrency(data.value, data.currency);
            } else if (data.maxValue) {
                valueElement.textContent = `${data.value}/${data.maxValue}`;
            } else {
                valueElement.textContent = this.formatNumber(data.value);
            }
        }

        if (changeElement) {
            const changeText = `${data.change > 0 ? '+' : ''}${data.change}%`;
            changeElement.textContent = changeText;
            changeElement.className = `stat-change ${data.trend === 'up' ? 'text-success' : 'text-danger'}`;
        }
    }

    renderRecentOrders() {
        const ordersContainer = document.getElementById('recent-orders-table');
        if (!ordersContainer || !this.data.dashboard.recentOrders) return;

        const tbody = ordersContainer.querySelector('tbody');
        if (!tbody) return;

        tbody.innerHTML = '';
        
        this.data.dashboard.recentOrders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="col-3">
                    <div class="d-flex align-items-center">
                        <div class="avatar avatar-md">
                            <img src="${order.customer.avatar}" alt="${order.customer.name}">
                        </div>
                        <div class="ms-3">
                            <p class="font-bold mb-0">${order.customer.name}</p>
                            <p class="text-muted mb-0 small">${order.customer.email}</p>
                        </div>
                    </div>
                </td>
                <td class="col-auto">
                    <p class="mb-0">${order.product}</p>
                    <p class="text-muted mb-0 small">${order.id}</p>
                </td>
                <td class="col-2">
                    <span class="badge bg-${this.getStatusColor(order.status)}">${order.status}</span>
                </td>
                <td class="col-2 text-end">
                    <p class="font-bold mb-0">${this.formatCurrency(order.amount, 'USD')}</p>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    renderTopProducts() {
        const productsContainer = document.getElementById('top-products-list');
        if (!productsContainer || !this.data.dashboard.topProducts) return;

        productsContainer.innerHTML = '';
        
        this.data.dashboard.topProducts.forEach((product, index) => {
            const productElement = document.createElement('div');
            productElement.className = 'product-item d-flex align-items-center mb-3';
            productElement.innerHTML = `
                <div class="product-image me-3">
                    <img src="${product.image}" alt="${product.name}" class="rounded" style="width: 50px; height: 50px; object-fit: cover;">
                </div>
                <div class="product-info flex-grow-1">
                    <h6 class="mb-1">${product.name}</h6>
                    <p class="text-muted mb-1 small">${product.category}</p>
                    <div class="d-flex align-items-center">
                        <div class="stars me-2">
                            ${this.generateStars(product.rating)}
                        </div>
                        <span class="text-muted small">${product.rating}/5</span>
                    </div>
                </div>
                <div class="product-stats text-end">
                    <p class="font-bold mb-1">${this.formatCurrency(product.revenue, 'USD')}</p>
                    <p class="text-muted mb-0 small">${this.formatNumber(product.sales)} sold</p>
                </div>
            `;
            productsContainer.appendChild(productElement);
        });
    }

    renderRecentMessages() {
        const messagesContainer = document.getElementById('recent-messages-list');
        if (!messagesContainer || !this.data.dashboard.recentMessages) return;

        messagesContainer.innerHTML = '';
        
        this.data.dashboard.recentMessages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.className = `recent-message d-flex px-4 py-3 ${message.unread ? 'unread' : ''}`;
            messageElement.innerHTML = `
                <div class="avatar avatar-lg position-relative">
                    <img src="${message.sender.avatar}" alt="${message.sender.name}">
                    <span class="status-indicator ${message.sender.status}"></span>
                </div>
                <div class="name ms-4 flex-grow-1">
                    <h5 class="mb-1">${message.sender.name}</h5>
                    <p class="text-muted mb-0 small">${message.message}</p>
                    <p class="text-muted mb-0 small">${message.time}</p>
                </div>
                ${message.unread ? '<div class="unread-indicator"></div>' : ''}
            `;
            messagesContainer.appendChild(messageElement);
        });
    }

    initializeCharts() {
        // Wait a bit for DOM to be ready
        setTimeout(() => {
            this.initializeSalesChart();
            this.initializeCategoryChart();
            this.initializeDemographicsChart();
        }, 100);
    }

    initializeSalesChart() {
        const chartElement = document.getElementById('sales-chart');
        if (!chartElement || !this.data.dashboard.monthlySales) return;

        const salesData = this.data.dashboard.monthlySales;
        const months = salesData.map(item => item.month);
        const sales = salesData.map(item => item.sales / 1000000); // Convert to millions

        const options = {
            series: [{
                name: 'Sales (Millions)',
                data: sales
            }],
            chart: {
                type: 'area',
                height: 350,
                toolbar: {
                    show: false
                },
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            colors: ['#667eea'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.1,
                    stops: [0, 90, 100]
                }
            },
            xaxis: {
                categories: months,
                labels: {
                    style: {
                        colors: '#6b7280'
                    }
                }
            },
            yaxis: {
                labels: {
                    formatter: function(value) {
                        return '$' + value + 'M';
                    },
                    style: {
                        colors: '#6b7280'
                    }
                }
            },
            tooltip: {
                y: {
                    formatter: function(value) {
                        return '$' + (value * 1000000).toLocaleString();
                    }
                }
            },
            grid: {
                borderColor: '#e5e7eb',
                strokeDashArray: 4
            }
        };

        this.charts.sales = new ApexCharts(chartElement, options);
        this.charts.sales.render();
    }

    initializeCategoryChart() {
        const chartElement = document.getElementById('category-chart');
        if (!chartElement || !this.data.dashboard.salesByCategory) return;

        const categoryData = this.data.dashboard.salesByCategory;
        const categories = categoryData.map(item => item.category);
        const percentages = categoryData.map(item => item.percentage);

        const options = {
            series: percentages,
            chart: {
                type: 'donut',
                height: 300,
                background: 'transparent'
            },
            labels: categories,
            colors: ['#667eea', '#38b2ac', '#f59e0b', '#ef4444', '#8b5cf6', '#10b981'],
            plotOptions: {
                pie: {
                    donut: {
                        size: '60%'
                    }
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    colors: '#6b7280'
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };

        this.charts.category = new ApexCharts(chartElement, options);
        this.charts.category.render();
    }

    initializeDemographicsChart() {
        const chartElement = document.getElementById('demographics-chart');
        if (!chartElement || !this.data.dashboard.customerDemographics) return;

        const demographicsData = this.data.dashboard.customerDemographics;
        const ageGroups = demographicsData.map(item => item.ageGroup);
        const percentages = demographicsData.map(item => item.percentage);
        const colors = demographicsData.map(item => item.color);

        const options = {
            series: [{
                name: 'Percentage',
                data: percentages
            }],
            chart: {
                type: 'bar',
                height: 300,
                toolbar: {
                    show: false
                },
                background: 'transparent'
            },
            colors: colors,
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                    borderRadius: 4
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function(val) {
                    return val + '%';
                },
                style: {
                    fontSize: '12px',
                    colors: ['#fff']
                }
            },
            xaxis: {
                categories: ageGroups,
                labels: {
                    formatter: function(val) {
                        return val + '%';
                    },
                    style: {
                        colors: '#6b7280'
                    }
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: '#6b7280'
                    }
                }
            },
            grid: {
                borderColor: '#e5e7eb',
                strokeDashArray: 4
            }
        };

        this.charts.demographics = new ApexCharts(chartElement, options);
        this.charts.demographics.render();
    }

    // Utility methods
    formatCurrency(amount, currency = 'USD') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(amount);
    }

    formatNumber(number) {
        return new Intl.NumberFormat('en-US').format(number);
    }

    getStatusColor(status) {
        const statusColors = {
            'completed': 'success',
            'processing': 'warning',
            'shipped': 'info',
            'pending': 'secondary',
            'cancelled': 'danger'
        };
        return statusColors[status.toLowerCase()] || 'secondary';
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="bi bi-star-fill text-warning"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="bi bi-star-half text-warning"></i>';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="bi bi-star text-muted"></i>';
        }
        
        return stars;
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EcommerceDashboard();
}); 