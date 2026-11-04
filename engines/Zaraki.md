# Engine: Zaraki

Author: Timo Jokinen

Home: https://github.com/timojokinen/zaraki-zig

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.1 | 2026-07-02 | 1995 | 2244 | 2399 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.1 | 2026-07-02 | 2016 | 2265 | 2368 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.1 | 2026-07-02 | 2055 | 2272 | 2354 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zaraki+<version>&body=###%20Engine%20name%0AZaraki%0A%0A###%20Version%0A0.0.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-04 05:44:39



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2399 | 30 | 368 | 56% | 2340 | 36% |
|  |  | T1 | 2354 | 33 | 292 | 44% | 2426 | 41% |
|  |  | P1 | 2368 | 40 | 204 | 47% | 2376 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2244 | 34 | 294 | 52% | 2260 | 35% |
|  |  | T1 | 2272 | 36 | 256 | 45% | 2344 | 37% |
|  |  | P1 | 2265 | 41 | 202 | 46% | 2326 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1995 | 33 | 292 | 47% | 2034 | 39% |
|  |  | T1 | 2055 | 29 | 400 | 43% | 2128 | 35% |
|  |  | P1 | 2016 | 37 | 232 | 47% | 2056 | 38% |