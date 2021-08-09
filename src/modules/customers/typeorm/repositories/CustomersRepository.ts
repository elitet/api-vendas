import { EntityRepository, Repository } from 'typeorm';
import Customer from '../entities/Customer';

@EntityRepository(Customer)
class CustomersRepository extends Repository<Customer> {
  public async findByName(name: string): Promise<Customer | undefined> {
    const costumer = await this.findOne({
      where: {
        name,
      },
    });

    return costumer;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    const costumer = await this.findOne({
      where: {
        id,
      },
    });

    return costumer;
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    const costumer = await this.findOne({
      where: {
        email,
      },
    });

    return costumer;
  }
}

export default CustomersRepository;
