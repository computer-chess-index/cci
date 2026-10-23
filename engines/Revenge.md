# Engine: Revenge

Author: Fabio Gobbato

Home: https://www.revengechess.com/

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.7 | 2025-01-01 | 3302 | 3519 | 3592 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.7 | 2025-01-01 | 3428 | 3614 | 3618 |  |
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

Generated: 2026-10-23 04:42:31



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3592 | 35 | 192 | 51% | 3583 | 79% |
|  |  | T1 | 3495 | 15 | 1002 | 50% | 3494 | 81% |
|  |  | P1 | 3618 | 44 | 124 | 51% | 3610 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3467 | 16 | 974 | 50% | 3465 | 78% |
|  |  | P1 | 3614 | 43 | 124 | 50% | 3613 | 86% |
|  |  | E1 | 3519 | 35 | 202 | 50% | 3522 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3428 | 32 | 254 | 50% | 3429 | 66% |
|  |  | E1 | 3302 | 28 | 328 | 48% | 3320 | 64% |
|  |  | T1 | 3289 | 15 | 1084 | 50% | 3291 | 67% |