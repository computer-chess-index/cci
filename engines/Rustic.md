# Engine: Rustic

Author: Marcel Vanthoor

Home: https://github.com/mvanthoor/rustic

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.6 | 2025-09-24 | 1588 | 1786 | 1872 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.6 | 2025-09-24 | 1592 | 1782 | 1814 |  |
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

Generated: 2026-11-21 05:42:24



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1872 | 33 | 348 | 52% | 1862 | 20% |
|  |  | T1 | 1906 | 23 | 676 | 46% | 1955 | 20% |
|  |  | P1 | 1814 | 39 | 240 | 51% | 1814 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1845 | 24 | 644 | 54% | 1805 | 19% |
|  |  | P1 | 1782 | 36 | 288 | 53% | 1775 | 19% |
|  |  | E1 | 1786 | 30 | 436 | 46% | 1848 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1627 | 23 | 674 | 46% | 1681 | 22% |
|  |  | P1 | 1592 | 37 | 256 | 51% | 1585 | 18% |
|  |  | E1 | 1588 | 30 | 400 | 49% | 1590 | 22% |