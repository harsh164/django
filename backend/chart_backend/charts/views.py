from django.http import JsonResponse

def candlestick_data(request):
    data = {
        "x": ["2023-09-01", "2023-09-02"], 
        "open": [100, 105],  
        "high": [110, 115],  
        "low": [90, 95],     
        "close": [105, 110]  
    }
    return JsonResponse(data)

def line_chart_data(request):
    data = {
        "labels": ["January", "February", "March", "April", "May"],
        "datasets": [{
            "label": "Sales",
            "data": [50, 60, 70, 180, 190],
            "borderColor": "rgba(75,192,192,1)",
            "fill": False
        }]
    }
    return JsonResponse(data)

def bar_chart_data(request):
    data = {
        "labels": ["2021", "2022", "2023"],
        "datasets": [{
            "label": "Revenue",
            "data": [400, 500, 600],
            "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
    }
    return JsonResponse(data)

def pie_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "datasets": [{
            "data": [300, 50, 100],
            "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
    }
    return JsonResponse(data)
