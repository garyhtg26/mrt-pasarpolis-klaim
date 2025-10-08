import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const LoginForm = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (otpSent && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpSent, countdown]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSendOTP = () => {
    setOtpSent(true);
    setCountdown(60);
  };

  const handleChangeNumber = () => {
    setOtpSent(false);
    setOtp("");
    setAgreedToTerms(false);
  };

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-card rounded-lg shadow-lg p-8 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2 text-card-foreground">
        Masuk ke akun Anda
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        (Sesuaikan kode negara Anda terlebih dahulu)
      </p>

      {!otpSent ? (
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md flex items-center justify-center font-normal min-w-[70px]">
              +62
            </div>
            <Input
              type="tel"
              placeholder="Masukkan No. Telepon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1"
            />
          </div>

          <div className="bg-muted p-4 rounded-md border-2 border-border flex items-center justify-center min-h-[80px]">
            <p className="text-sm text-muted-foreground">reCAPTCHA</p>
          </div>

          <Button className="w-full" size="lg" onClick={handleSendOTP}>
            Kirim OTP
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Silakan periksa OTP yang terkirim ke
            </p>
            <div className="flex items-center justify-between">
              <p className="text-secondary font-semibold">+62 {phone}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleChangeNumber}
                className="border-secondary text-xs text-secondary hover:bg-secondary/10 rounded-full"
              >
                GANTI NOMOR
              </Button>
            </div>
          </div>

          <div>
            <Label className="text-sm font-semibold mb-2 block">
              Masukkan OTP
            </Label>
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="flex ml-1 items-start space-x-2">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            />
            <label
              htmlFor="terms"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Saya setuju dengan{" "}
              <a href="#" className="text-secondary underline">
                Syarat & Ketentuan
              </a>{" "}
              yang berlaku
            </label>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Kirim ulang OTP {formatTime(countdown)}
          </div>

          <Button 
            className="w-full" 
            size="lg" 
            disabled={!agreedToTerms || otp.length !== 6}
            onClick={handleLogin}
          >
            Masuk
          </Button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
