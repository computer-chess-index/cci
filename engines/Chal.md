# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2284<sub>(+23) | 2558<sub>(+66) | 2649<sub>(+65) |  |
| 1.4.0 | 2026-04-01 | 2261<sub>(+213) | 2492<sub>(+131) | 2584<sub>(+199) |  |
| 1.3.2 | 2026-03-14 | 2048<sub>(+28) | 2361<sub>(+27) | 2385<sub>(+2) |  |
| 1.3.1 | 2026-03-10 | 2020<sub>(+154) | 2334<sub>(+111) | 2383<sub>(+135) |  |
| 1.3.0 | 2026-03-08 | 1866<sub>(+185) | 2223<sub>(+310) | 2248<sub>(+238) |  |
| 1.2.1 | 2026-03-07 | 1681 | 1913 | 2010 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chal+<version>&body=###%20Engine%20name%0AChal%0A%0A###%20Version%0A1.4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-05 04:33:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "" [1681, 1866, 2020, 2048, 2261, 2284]
  line "STC (8.0+0.08s)" [1681, 1866, 2020, 2048, 2261, 2284]
  line "LTC (60.0+0.60s)" [1913, 2223, 2334, 2361, 2492, 2558]
  line "" [2010, 2248, 2383, 2385, 2584, 2649]
  line "VLTC (2m24s+1.12s)" [2010, 2248, 2383, 2385, 2584, 2649]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2649 | 25 | 494 | 52% | 2631 | 34% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2558 | 25 | 514 | 49% | 2566 | 33% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2284 | 27 | 476 | 48% | 2309 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2584 | 30 | 360 | 50% | 2583 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2492 | 32 | 320 | 49% | 2498 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2261 | 31 | 360 | 52% | 2244 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2385 | 34 | 296 | 49% | 2395 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2361 | 32 | 312 | 51% | 2354 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2048 | 32 | 320 | 48% | 2067 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2383 | 37 | 244 | 51% | 2369 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2334 | 37 | 240 | 51% | 2327 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2020 | 40 | 212 | 52% | 2003 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2248 | 44 | 188 | 54% | 2213 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2223 | 41 | 204 | 55% | 2180 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1866 | 42 | 196 | 50% | 1866 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2010 | 39 | 254 | 50% | 2020 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1913 | 45 | 192 | 46% | 1983 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1681 | 44 | 200 | 47% | 1754 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |