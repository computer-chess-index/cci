# Engine: Zaraki

Author: Timo Jokinen

Home: https://github.com/timojokinen/zaraki-zig

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.1 | 2026-07-02 | 1999 | 2242 | 2408 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.1 | 2026-07-02 | 1995 | 2280 | 2364 |  |
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

Generated: 2026-11-01 05:44:32



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2364 | 42 | 184 | 48% | 2364 | 41% |
|  |  | E1 | 2408 | 31 | 348 | 57% | 2336 | 36% |
|  |  | T1 | 2354 | 33 | 292 | 44% | 2426 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2280 | 44 | 174 | 49% | 2319 | 32% |
|  |  | E1 | 2242 | 35 | 278 | 52% | 2264 | 35% |
|  |  | T1 | 2272 | 36 | 256 | 45% | 2344 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1999 | 33 | 288 | 47% | 2037 | 39% |
|  |  | T1 | 2055 | 29 | 400 | 43% | 2128 | 35% |
|  |  | P1 | 1995 | 38 | 224 | 47% | 2043 | 38% |