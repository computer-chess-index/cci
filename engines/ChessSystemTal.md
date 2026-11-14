# Engine: ChessSystemTal

Author: Chris Wittington

Home: 

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| Extreme | 2026-01-07 | 2898 | 3152 | 3228 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| Extreme | 2026-01-07 | 2882 | 3094 | 3204 |  |
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

Generated: 2026-11-14 05:37:14



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| Extreme | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3236 | 24 | 515 | 51% | 3225 | 44% |
|  |  | P1 | 3204 | 33 | 278 | 49% | 3208 | 38% |
|  |  | E1 | 3228 | 25 | 482 | 54% | 3186 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3094 | 31 | 330 | 55% | 3050 | 41% |
|  |  | E1 | 3152 | 27 | 452 | 53% | 3100 | 33% |
|  |  | T1 | 3179 | 24 | 528 | 51% | 3167 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2882 | 33 | 308 | 48% | 2897 | 31% |
|  |  | E1 | 2898 | 30 | 368 | 48% | 2919 | 33% |
|  |  | T1 | 2935 | 21 | 776 | 49% | 2943 | 33% |