# Engine: Spaghet

Author: Li Ying

Home: https://github.com/yl25946/spaghet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2024-08-12 | 3235 | 3518 | 3556 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2024-08-12 | 3399 | 3605 | 3650 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2024-08-12 | 3222 | 3433 | 3476 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Spaghet+<version>&body=###%20Engine%20name%0ASpaghet%0A%0A###%20Version%0A3.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-02 05:43:20



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3556 | 31 | 264 | 51% | 3546 | 70% |
|  |  | T1 | 3476 | 16 | 954 | 50% | 3474 | 81% |
|  |  | P1 | 3650 | 37 | 168 | 49% | 3657 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3518 | 31 | 248 | 53% | 3492 | 76% |
|  |  | T1 | 3433 | 16 | 954 | 49% | 3437 | 78% |
|  |  | P1 | 3605 | 38 | 166 | 51% | 3598 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3235 | 26 | 388 | 46% | 3262 | 63% |
|  |  | T1 | 3222 | 15 | 1148 | 50% | 3217 | 63% |
|  |  | P1 | 3399 | 34 | 234 | 50% | 3401 | 60% |