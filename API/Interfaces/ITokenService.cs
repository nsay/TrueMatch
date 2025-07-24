using APi.Entities;

namespace API.Interfaces;

public interface ITokenService
{
    string CreateToken(AppUser user);
}
