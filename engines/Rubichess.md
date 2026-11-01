# Engine: Rubichess

Author: Andreas Matthies

Home: https://github.com/Matthies/RubiChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20240817 | 2024-08-17 | 3395 | 3630 | 3676 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20240817 | 2024-08-17 | 3532 | 3714 | 3749 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20240817 | 2024-08-17 | 3356 | 3502 | 3534 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rubichess+<version>&body=###%20Engine%20name%0ARubichess%0A%0A###%20Version%0A20240817" target="_blank">Submit new version</a>

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

Generated: 2026-11-01 05:42:24



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20240817 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3749 | 38 | 156 | 49% | 3754 | 87% |
|  |  | E1 | 3676 | 37 | 168 | 49% | 3683 | 85% |
|  |  | T1 | 3534 | 11 | 1994 | 50% | 3530 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3714 | 43 | 124 | 51% | 3707 | 85% |
|  |  | E1 | 3630 | 35 | 196 | 50% | 3627 | 82% |
|  |  | T1 | 3502 | 11 | 2008 | 51% | 3495 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3395 | 28 | 338 | 46% | 3422 | 66% |
|  |  | T1 | 3356 | 11 | 2300 | 51% | 3335 | 71% |
|  |  | P1 | 3532 | 33 | 244 | 49% | 3542 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |