# Engine: Rubichess

Author: Andreas Matthies

Home: https://github.com/Matthies/RubiChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20240817 | 2024-08-17 | 3275 | 3501 | 3555 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20240817 | 2024-08-17 | 3495 | 3667 | 3704 |  |
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

Generated: 2026-10-15 04:43:04



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20240817 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3555 | 42 | 132 | 50% | 3555 | 85% |
|  |  | T1 | 3534 | 11 | 1994 | 50% | 3530 | 86% |
|  |  | P1 | 3704 | 42 | 128 | 48% | 3714 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3501 | 39 | 152 | 50% | 3501 | 82% |
|  |  | T1 | 3502 | 11 | 2008 | 51% | 3495 | 82% |
|  |  | P1 | 3667 | 46 | 108 | 51% | 3659 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3275 | 31 | 278 | 46% | 3303 | 67% |
|  |  | T1 | 3356 | 11 | 2300 | 51% | 3335 | 71% |
|  |  | P1 | 3495 | 35 | 212 | 50% | 3491 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |