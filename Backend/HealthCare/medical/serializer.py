from rest_framework import serializers
from .models import User, HealthIssue, Appointment
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_patient', 'is_doctor']

class HealthIssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = HealthIssue
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
