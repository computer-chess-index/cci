# Engine: Weak

Author: Ethan Pan

Home: https://github.com/Dragjon/weak-chess-engine

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2025-08-11 | 2402 | 2804 | 2932 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2025-08-11 | 2584 | 2944 | 3086 |  |
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

Generated: 2026-10-12 04:44:15



## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3086 | 36 | 240 | 45% | 3128 | 42% |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2932 | 35 | 256 | 49% | 2951 | 39% |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2931 | 25 | 478 | 51% | 2920 | 44% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2944 | 46 | 152 | 54% | 2893 | 39% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2804 | 39 | 226 | 52% | 2754 | 31% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2884 | 23 | 614 | 51% | 2858 | 37% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2402 | 36 | 254 | 44% | 2460 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2542 | 21 | 728 | 50% | 2518 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2584 | 45 | 170 | 50% | 2553 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |