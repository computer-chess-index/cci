# Engine: Zerog

Author: Kristian Ekman

Home: https://github.com/KristianEkman/ZeroG

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.2 | 2026-07-14 | 2138 | 2485 | 2592 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.2 | 2026-07-14 | 2172 | 2488 | 2595 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.2 | 2026-07-14 | 2195 | 2496 | 2592 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zerog+<version>&body=###%20Engine%20name%0AZerog%0A%0A###%20Version%0A1.0.2" target="_blank">Submit new version</a>

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

Generated: 2026-10-23 04:45:10



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2592 | 49 | 150 | 55% | 2481 | 27% |
|  |  | T1 | 2592 | 39 | 222 | 52% | 2566 | 32% |
|  |  | P1 | 2595 | 68 | 76 | 56% | 2493 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2485 | 44 | 174 | 45% | 2520 | 31% |
|  |  | T1 | 2496 | 39 | 230 | 54% | 2421 | 31% |
|  |  | P1 | 2488 | 64 | 80 | 49% | 2462 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2195 | 44 | 184 | 56% | 2110 | 26% |
|  |  | P1 | 2172 | 60 | 118 | 61% | 1872 | 20% |
|  |  | E1 | 2138 | 49 | 166 | 48% | 2167 | 18% |