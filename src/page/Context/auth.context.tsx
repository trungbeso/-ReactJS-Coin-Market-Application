import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (data: any) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
                                                                    children
                                                                }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        !!localStorage.getItem('jwt'),
    );

    // Check if user is already authenticated based on token in local storage
    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    // Nhận data từ login form và set isAuthenticated thành true nếu như user đăng nhập thành công
    const login = async (data: any) => {
        if (data) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    };

    // Xoá toàn bộ data logged in của user khi logout
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('jwt');
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};