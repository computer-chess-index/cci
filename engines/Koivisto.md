# Engine: Koivisto

Author: Finn Eggers

Home: https://github.com/Luecx/Koivisto

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2023-01-15 | 3272 | 3474 | 3534 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2023-01-15 | 3434 | 3613 | 3610 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2023-01-15 | 3285 | 3433 | 3472 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Koivisto+<version>&body=###%20Engine%20name%0AKoivisto%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-20 04:39:53



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3472 | 11 | 2092 | 51% | 3470 | 78% |
|  |  | P1 | 3610 | 44 | 124 | 52% | 3596 | 79% |
|  |  | E1 | 3534 | 36 | 184 | 50% | 3534 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3613 | 36 | 196 | 56% | 3567 | 71% |
|  |  | E1 | 3474 | 29 | 300 | 50% | 3471 | 67% |
|  |  | T1 | 3433 | 11 | 1960 | 50% | 3433 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3434 | 33 | 238 | 50% | 3433 | 67% |
|  |  | E1 | 3272 | 29 | 316 | 48% | 3286 | 61% |
|  |  | T1 | 3285 | 11 | 2232 | 50% | 3283 | 63% |