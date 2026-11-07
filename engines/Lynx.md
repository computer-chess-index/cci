# Engine: Lynx

Author: Eduardo Caceres

Home: https://github.com/lynx-chess/Lynx

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.11.0 | 2025-10-01 | 2807 | 3221 | 3302 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.11.0 | 2025-10-01 | 2974 | 3370 | 3421 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.11.0 | 2025-10-01 | 2836 | 3150 | 3214 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lynx+<version>&body=###%20Engine%20name%0ALynx%0A%0A###%20Version%0A1.11.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-07 05:39:38



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.11.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3421 | 31 | 300 | 47% | 3438 | 52% |
|  |  | E1 | 3302 | 28 | 374 | 55% | 3201 | 51% |
|  |  | T1 | 3214 | 22 | 564 | 50% | 3204 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3221 | 30 | 340 | 51% | 3154 | 46% |
|  |  | T1 | 3150 | 22 | 574 | 52% | 3114 | 55% |
|  |  | P1 | 3370 | 35 | 262 | 51% | 3343 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2807 | 29 | 392 | 47% | 2838 | 34% |
|  |  | T1 | 2836 | 19 | 828 | 50% | 2832 | 40% |
|  |  | P1 | 2974 | 39 | 204 | 48% | 3000 | 36% |