# Engine: Meltdown

Author: Hans Binderup, Clara Shepherd

Home: https://github.com/hansbinderup/meltdown-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.11 | 2025-11-15 | 2627 | 2844 | 2901 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.11 | 2025-11-15 | 2711 | 2958 | 3012 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.11 | 2025-11-15 | 2680 | 2884 | 2925 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Meltdown+<version>&body=###%20Engine%20name%0AMeltdown%0A%0A###%20Version%0A1.11" target="_blank">Submit new version</a>

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

Generated: 2026-10-16 04:40:47



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.11 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2925 | 23 | 562 | 49% | 2931 | 40% |
|  |  | P1 | 3012 | 41 | 196 | 49% | 3013 | 32% |
|  |  | E1 | 2901 | 37 | 238 | 54% | 2859 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2884 | 23 | 610 | 52% | 2865 | 38% |
|  |  | P1 | 2958 | 37 | 234 | 46% | 2989 | 37% |
|  |  | E1 | 2844 | 38 | 256 | 59% | 2655 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2680 | 20 | 840 | 50% | 2668 | 35% |
|  |  | P1 | 2711 | 38 | 216 | 47% | 2739 | 37% |
|  |  | E1 | 2627 | 34 | 280 | 50% | 2638 | 35% |