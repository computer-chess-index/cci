# Engine: ChessSystemTal

Author: Chris Wittington

Home: 

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| Extreme | 2026-01-07 | 2908 | 3163 | 3236 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| Extreme | 2026-01-07 | 2908 | 3104 | 3205 |  |
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

Generated: 2026-11-20 05:37:21



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| Extreme | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3236 | 25 | 502 | 53% | 3198 | 44% |
|  |  | T1 | 3236 | 24 | 515 | 51% | 3225 | 44% |
|  |  | P1 | 3205 | 33 | 282 | 50% | 3206 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3163 | 27 | 466 | 53% | 3110 | 33% |
|  |  | T1 | 3179 | 24 | 528 | 51% | 3167 | 41% |
|  |  | P1 | 3104 | 30 | 346 | 55% | 3063 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2935 | 21 | 776 | 49% | 2943 | 33% |
|  |  | P1 | 2908 | 32 | 324 | 48% | 2921 | 30% |
|  |  | E1 | 2908 | 28 | 404 | 48% | 2927 | 32% |