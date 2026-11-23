# Engine: Revenge

Author: Fabio Gobbato

Home: https://www.revengechess.com/

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.7 | 2025-01-01 | 3275 | 3484 | 3564 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.7 | 2025-01-01 | 3290 | 3474 | 3486 |  |
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

Generated: 2026-11-23 05:42:09



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3495 | 15 | 1002 | 50% | 3494 | 81% |
|  |  | P1 | 3486 | 36 | 184 | 51% | 3483 | 79% |
|  |  | E1 | 3564 | 30 | 260 | 51% | 3556 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3474 | 37 | 168 | 49% | 3479 | 83% |
|  |  | E1 | 3484 | 28 | 310 | 49% | 3492 | 74% |
|  |  | T1 | 3467 | 16 | 974 | 50% | 3465 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3290 | 29 | 306 | 49% | 3295 | 66% |
|  |  | E1 | 3275 | 25 | 416 | 47% | 3295 | 64% |
|  |  | T1 | 3289 | 15 | 1084 | 50% | 3291 | 67% |