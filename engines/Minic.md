# Engine: Minic

Author: Vivien Clauzon

Home: https://github.com/tryingsomestuff/Minic

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.41 | 2024-01-18 | 2973 | 3294 | 3375 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.41 | 2024-01-18 | 2923 | 3249 | 3302 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.41 | 2024-01-18 | 2973 | 3272 | 3341 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Minic+<version>&body=###%20Engine%20name%0AMinic%0A%0A###%20Version%0A3.41" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:40:16



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.41 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3341 | 11 | 1956 | 51% | 3333 | 71% |
|  |  | P1 | 3302 | 31 | 276 | 54% | 3266 | 62% |
|  |  | E1 | 3375 | 26 | 382 | 48% | 3380 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3249 | 33 | 236 | 51% | 3236 | 69% |
|  |  | E1 | 3294 | 27 | 364 | 53% | 3266 | 69% |
|  |  | T1 | 3272 | 12 | 1890 | 50% | 3268 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2923 | 34 | 240 | 50% | 2919 | 52% |
|  |  | E1 | 2973 | 26 | 426 | 50% | 2977 | 50% |
|  |  | T1 | 2973 | 12 | 2074 | 51% | 2959 | 50% |