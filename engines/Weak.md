# Engine: Weak

Author: Ethan Pan

Home: https://github.com/Dragjon/weak-chess-engine

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2025-08-11 | 2403 | 2800 | 2932 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2025-08-11 | 2604 | 2966 | 3112 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-11 10:18:52



## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3112 | 36 | 236 | 45% | 3152 | 42% |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2932 | 37 | 236 | 49% | 2952 | 39% |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2931 | 25 | 478 | 51% | 2920 | 44% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2966 | 46 | 152 | 54% | 2915 | 39% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2800 | 39 | 222 | 52% | 2754 | 30% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2884 | 23 | 614 | 51% | 2858 | 37% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2403 | 36 | 254 | 44% | 2460 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2542 | 21 | 728 | 50% | 2518 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2604 | 45 | 170 | 50% | 2572 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |