from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import HealthIssue, Appointment
from .serializer import HealthIssueSerializer, AppointmentSerializer

class HealthIssueListView(APIView):
    def get(self, request):
        issues = HealthIssue.objects.all()
        serializer = HealthIssueSerializer(issues, many=True)
        return Response(serializer.data)

class AppointmentView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
