function check() {
    let num1 = document.getElementById("pass1").value;
    let num2 = document.getElementById("pass2").value;

    if (num1 == num2 && num1 != '') {
        document.getElementById("output").innerHTML = "✅ Password Matched"
    } else {
        document.getElementById("output").innerHTML = "❌ Password Not Matched"
    }
}

function use() {
    let num1 = document.getElementById("pass1");
    let num2 = document.getElementById("pass2");
    if (num1.type === "password" && num2.type === "password") {
        num1.type = 'text';
        num2.type = 'text';
    } else {
        num1.type = 'password';
        num1.type = 'password';
    }
}