# Engine: Titan

Author: Jeff Powell

Home: https://github.com/jeff-pow/Titan

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2024-06-09 | 3133 | 3426 | 3505 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2024-06-09 | 3405 | 3590 | 3659 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2024-06-09 | 3255 | 3447 | 3480 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Titan+<version>&body=###%20Engine%20name%0ATitan%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-16 04:44:29



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3505 | 34 | 210 | 52% | 3488 | 75% |
|  |  | T1 | 3480 | 11 | 2040 | 50% | 3479 | 81% |
|  |  | P1 | 3659 | 43 | 128 | 52% | 3648 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3590 | 39 | 162 | 47% | 3611 | 74% |
|  |  | E1 | 3426 | 35 | 196 | 51% | 3422 | 80% |
|  |  | T1 | 3447 | 11 | 2046 | 50% | 3443 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3405 | 37 | 184 | 51% | 3397 | 65% |
|  |  | E1 | 3133 | 27 | 378 | 44% | 3174 | 62% |
|  |  | T1 | 3255 | 11 | 2156 | 51% | 3244 | 66% |