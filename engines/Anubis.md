# Engine: Anubis

Author: Jose Carlos Martinez Galan

Home: https://github.com/Lacovipo/Anubis-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.6 | 2025-10-02 | 2377 | 2888 | 3009 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.6 | 2025-10-02 | 2331 | 2854 | 2998 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.6 | 2025-10-02 | 2498 | 2917 | 3043 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Anubis+<version>&body=###%20Engine%20name%0AAnubis%0A%0A###%20Version%0A3.0.6" target="_blank">Submit new version</a>

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

Generated: 2026-11-25 05:35:50



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3043 | 23 | 544 | 48% | 3056 | 46% |
|  |  | P1 | 2998 | 34 | 262 | 53% | 2946 | 42% |
|  |  | E1 | 3009 | 28 | 384 | 50% | 2996 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2917 | 23 | 596 | 47% | 2938 | 41% |
|  |  | P1 | 2854 | 36 | 238 | 51% | 2842 | 42% |
|  |  | E1 | 2888 | 27 | 454 | 46% | 2923 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2498 | 22 | 722 | 54% | 2461 | 26% |
|  |  | P1 | 2331 | 38 | 248 | 47% | 2352 | 23% |
|  |  | E1 | 2377 | 30 | 400 | 46% | 2427 | 21% |