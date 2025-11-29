import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/user.dart';

class AuthService {
  final String baseUrl = "http://192.168.0.100:8000"; // coloque IP da API

  Future<UserLoginResponse?> login(String email, String senha) async {
    final url = Uri.parse("$baseUrl/login");

    final response = await http.post(
      url,
      headers: {"Content-Type": "application/json"},
      body: jsonEncode({"email": email, "senha": senha}),
    );

    if (response.statusCode == 200) {
      return UserLoginResponse.fromJson(jsonDecode(response.body));
    }

    return null;
  }
}
