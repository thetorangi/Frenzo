from django.http import JsonResponse

from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .forms import SignupForm


@api_view(['GET'])
def me(request):
    return JsonResponse({
        'id': request.user.id,
        'name': request.user.name,
        'email': request.user.email,
    })

@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def signup(request):
    print('signup called')

    data = request.data

    form = SignupForm({
        'email': data.get('email'),
        'name': data.get('name'),
        'password1': data.get('password1'),
        'password2': data.get('password2'),
    })

    if form.is_valid():
        form.save()
        print('form is valid and user saved')
        return JsonResponse({'message': 'success'})
    else:
        print('form errors:', form.errors)
        return JsonResponse({
            'message': 'error',
            'errors': form.errors  # <-- send errors to frontend
        }, status=400)
    return JsonResponse({'message': message})