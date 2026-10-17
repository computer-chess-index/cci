# Engine: Lynx

Author: Eduardo Caceres

Home: https://github.com/lynx-chess/Lynx

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.11.0 | 2025-10-01 | 2677 | 3092 | 3158 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.11.0 | 2025-10-01 | 2915 | 3294 | 3341 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.11.0 | 2025-10-01 | 2836 | 3150 | 3214 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lynx+<version>&body=###%20Engine%20name%0ALynx%0A%0A###%20Version%0A1.11.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-17 04:40:10



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.11.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3214 | 22 | 564 | 50% | 3204 | 53% |
|  |  | P1 | 3341 | 35 | 236 | 47% | 3362 | 52% |
|  |  | E1 | 3158 | 33 | 280 | 56% | 3031 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3150 | 22 | 574 | 52% | 3114 | 55% |
|  |  | P1 | 3294 | 41 | 198 | 52% | 3259 | 38% |
|  |  | E1 | 3092 | 33 | 280 | 52% | 3005 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2836 | 19 | 828 | 50% | 2832 | 40% |
|  |  | P1 | 2915 | 44 | 164 | 49% | 2924 | 36% |
|  |  | E1 | 2677 | 31 | 340 | 46% | 2712 | 33% |