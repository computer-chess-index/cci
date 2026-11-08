# Engine: Revenge

Author: Fabio Gobbato

Home: https://www.revengechess.com/

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.7 | 2025-01-01 | 3341 | 3557 | 3629 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.7 | 2025-01-01 | 3483 | 3664 | 3675 |  |
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

Generated: 2026-11-08 05:41:28



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3629 | 33 | 216 | 51% | 3621 | 78% |
|  |  | T1 | 3495 | 15 | 1002 | 50% | 3494 | 81% |
|  |  | P1 | 3675 | 38 | 164 | 51% | 3667 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3467 | 16 | 974 | 50% | 3465 | 78% |
|  |  | P1 | 3664 | 37 | 168 | 49% | 3668 | 83% |
|  |  | E1 | 3557 | 31 | 250 | 49% | 3561 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3483 | 30 | 282 | 50% | 3480 | 66% |
|  |  | E1 | 3341 | 27 | 368 | 48% | 3357 | 64% |
|  |  | T1 | 3289 | 15 | 1084 | 50% | 3291 | 67% |