from django.urls import path
from .views import HealthIssueListView, AppointmentView

urlpatterns = [
    path('health-issues/', HealthIssueListView.as_view(), name='health_issues'),
    path('appointments/', AppointmentView.as_view(), name='appointments'),
]
