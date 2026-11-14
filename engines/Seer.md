# Engine: Seer

Author: Connor McMonigle

Home: https://github.com/connormcmonigle/seer-nnue

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2023-12-31 | 3221 | 3445 | 3528 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2023-12-31 | 3247 | 3426 | 3492 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2023-12-31 | 3278 | 3451 | 3482 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Seer+<version>&body=###%20Engine%20name%0ASeer%0A%0A###%20Version%0A2.8" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:42:24



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.8 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3482 | 11 | 2071 | 51% | 3472 | 80% |
|  |  | E1 | 3528 | 28 | 308 | 53% | 3498 | 76% |
|  |  | P1 | 3492 | 36 | 184 | 49% | 3495 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3451 | 11 | 1960 | 50% | 3449 | 76% |
|  |  | E1 | 3445 | 30 | 280 | 51% | 3437 | 69% |
|  |  | P1 | 3426 | 35 | 202 | 49% | 3434 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3278 | 11 | 2216 | 51% | 3255 | 65% |
|  |  | E1 | 3221 | 26 | 392 | 46% | 3251 | 57% |
|  |  | P1 | 3247 | 31 | 266 | 50% | 3248 | 67% |