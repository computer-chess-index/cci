# Engine: Rustic

Author: Marcel Vanthoor

Home: https://github.com/mvanthoor/rustic

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.6 | 2025-09-24 | 1643 | 1858 | 1914 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.6 | 2025-09-24 | 1623 | 1843 | 1860 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.6 | 2025-09-24 | 1627 | 1845 | 1906 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rustic+<version>&body=###%20Engine%20name%0ARustic%0A%0A###%20Version%0A3.0.6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-31 05:42:39



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1860 | 47 | 168 | 51% | 1866 | 20% |
|  |  | E1 | 1914 | 40 | 232 | 52% | 1910 | 19% |
|  |  | T1 | 1906 | 23 | 676 | 46% | 1955 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1858 | 35 | 322 | 48% | 1916 | 18% |
|  |  | T1 | 1845 | 24 | 644 | 54% | 1805 | 19% |
|  |  | P1 | 1843 | 42 | 220 | 53% | 1856 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1643 | 37 | 268 | 49% | 1650 | 22% |
|  |  | T1 | 1627 | 23 | 674 | 46% | 1681 | 22% |
|  |  | P1 | 1623 | 43 | 196 | 49% | 1634 | 16% |