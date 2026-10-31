# Engine: Laser

Author: Jeffrey An

Home: https://github.com/jeffreyan11/laser-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2019-02-07 | 2805 | 3156 | 3191 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2019-02-07 | 2854 | 3162 | 3237 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2019-02-07 | 2795 | 3070 | 3132 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Laser+<version>&body=###%20Engine%20name%0ALaser%0A%0A###%20Version%0A1.7" target="_blank">Submit new version</a>

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

Generated: 2026-10-31 05:39:41



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3132 | 12 | 1930 | 50% | 3131 | 48% |
|  |  | P1 | 3237 | 42 | 170 | 52% | 3205 | 48% |
|  |  | E1 | 3191 | 32 | 308 | 56% | 3121 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3070 | 12 | 1966 | 51% | 3059 | 44% |
|  |  | P1 | 3162 | 38 | 220 | 55% | 3097 | 39% |
|  |  | E1 | 3156 | 33 | 284 | 54% | 3116 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2795 | 12 | 2070 | 50% | 2800 | 35% |
|  |  | P1 | 2854 | 41 | 180 | 50% | 2862 | 41% |
|  |  | E1 | 2805 | 30 | 372 | 47% | 2836 | 28% |