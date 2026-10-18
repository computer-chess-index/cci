# Engine: Weak

Author: Ethan Pan

Home: https://github.com/Dragjon/weak-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2025-08-11 | 2421 | 2812 | 2938 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2025-08-11 | 2552 | 2920 | 3050 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2025-08-11 | 2542 | 2884 | 2931 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Weak+<version>&body=###%20Engine%20name%0AWeak%0A%0A###%20Version%0A1.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-18 04:44:26



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2938 | 32 | 308 | 47% | 2969 | 39% |
|  |  | T1 | 2931 | 25 | 478 | 51% | 2920 | 44% |
|  |  | P1 | 3050 | 33 | 280 | 45% | 3089 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2812 | 36 | 266 | 51% | 2782 | 30% |
|  |  | T1 | 2884 | 23 | 614 | 51% | 2858 | 37% |
|  |  | P1 | 2920 | 41 | 188 | 54% | 2870 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2542 | 21 | 728 | 50% | 2518 | 33% |
|  |  | P1 | 2552 | 45 | 170 | 50% | 2520 | 26% |
|  |  | E1 | 2421 | 35 | 274 | 44% | 2476 | 33% |