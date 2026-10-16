# Engine: ChessSystemTal

Author: Chris Wittington

Home: 

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| Extreme | 2026-01-07 | 2840 | 3102 | 3170 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| Extreme | 2026-01-07 | 3028 | 3251 | 3355 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| Extreme | 2026-01-07 | 2935 | 3179 | 3236 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+ChessSystemTal+<version>&body=###%20Engine%20name%0AChessSystemTal%0A%0A###%20Version%0AExtreme" target="_blank">Submit new version</a>

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

Generated: 2026-10-16 04:37:21



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| Extreme | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3170 | 32 | 302 | 56% | 3106 | 43% |
|  |  | T1 | 3236 | 24 | 515 | 51% | 3225 | 44% |
|  |  | P1 | 3355 | 40 | 196 | 48% | 3372 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3179 | 24 | 528 | 51% | 3167 | 41% |
|  |  | P1 | 3251 | 34 | 262 | 56% | 3200 | 44% |
|  |  | E1 | 3102 | 31 | 356 | 54% | 3035 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2935 | 21 | 776 | 49% | 2943 | 33% |
|  |  | P1 | 3028 | 37 | 244 | 48% | 3047 | 32% |
|  |  | E1 | 2840 | 33 | 292 | 47% | 2871 | 33% |