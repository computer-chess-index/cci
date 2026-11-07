# Engine: Revenge

Author: Fabio Gobbato

Home: https://www.revengechess.com/

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.7 | 2025-01-01 | 3360 | 3578 | 3650 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.7 | 2025-01-01 | 3532 | 3713 | 3725 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.7 | 2025-01-01 | 3289 | 3467 | 3495 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Revenge+<version>&body=###%20Engine%20name%0ARevenge%0A%0A###%20Version%0A4.0.7" target="_blank">Submit new version</a>

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

Generated: 2026-11-07 05:41:35



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3650 | 33 | 216 | 51% | 3642 | 78% |
|  |  | T1 | 3495 | 15 | 1002 | 50% | 3494 | 81% |
|  |  | P1 | 3725 | 39 | 160 | 51% | 3715 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3467 | 16 | 974 | 50% | 3465 | 78% |
|  |  | P1 | 3713 | 38 | 164 | 49% | 3717 | 83% |
|  |  | E1 | 3578 | 31 | 250 | 49% | 3583 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3289 | 15 | 1084 | 50% | 3291 | 67% |
|  |  | P1 | 3532 | 30 | 282 | 50% | 3529 | 66% |
|  |  | E1 | 3360 | 27 | 360 | 48% | 3379 | 64% |