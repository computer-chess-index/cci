# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2088<sub>(+66) | 2404<sub>(+167) | 2433<sub>(+119) |  |
| 0.2.3 | 2025-12-08 | 2022<sub>(+29) | 2237<sub>(-24) | 2314<sub>(+16) |  |
| 0.2.2 | 2025-11-29 | 1993<sub>(+64) | 2261<sub>(+79) | 2298<sub>(-19) |  |
| 0.2.1 | 2025-11-16 | 1929<sub>(-69) | 2182<sub>(-28) | 2317<sub>(-51) |  |
| 0.2 | 2025-11-15 | 1998 | 2210 | 2368 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lolbot+<version>&body=###%20Engine%20name%0ALolbot%0A%0A###%20Version%0A0.3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-28 06:26:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "" [1998, 1929, 1993, 2022, 2088]
  line "STC (8.0+0.08s)" [1998, 1929, 1993, 2022, 2088]
  line "LTC (60.0+0.60s)" [2210, 2182, 2261, 2237, 2404]
  line "" [2368, 2317, 2298, 2314, 2433]
  line "VLTC (2m24s+1.12s)" [2368, 2317, 2298, 2314, 2433]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2433 | 26 | 508 | 51% | 2414 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2404 | 26 | 526 | 53% | 2375 | 22% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2088 | 27 | 508 | 50% | 2083 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2314 | 31 | 362 | 48% | 2333 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2237 | 31 | 376 | 51% | 2222 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2022 | 28 | 468 | 49% | 2030 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2298 | 53 | 128 | 53% | 2269 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2261 | 66 | 76 | 51% | 2259 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 1993 | 59 | 104 | 49% | 2006 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2317 | 55 | 132 | 44% | 2392 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2182 | 64 | 88 | 46% | 2221 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1929 | 70 | 76 | 50% | 1929 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2368 | 56 | 116 | 52% | 2348 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2210 | 47 | 160 | 49% | 2222 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 1998 | 59 | 100 | 54% | 1958 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |