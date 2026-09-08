# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2866<sub>(+new) | 3141<sub>(+new) | 3237<sub>(+new) |  |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2273<sub>(+97) | 2615<sub>(+144) | 2757<sub>(+150) |  |
| 1.6.0 | 2026-03-14 | 2176<sub>(+150) | 2471<sub>(+135) | 2607<sub>(+162) |  |
| 1.5.0 | 2026-03-04 | 2026<sub>(+253) | 2336<sub>(+248) | 2445<sub>(+238) |  |
| 1.4.0 | 2026-02-07 | 1773<sub>(+134) | 2088<sub>(+105) | 2207<sub>(+127) |  |
| 1.3.1 | 2026-02-01 | 1639<sub>(-24) | 1983<sub>(+17) | 2080<sub>(+52) |  |
| 1.2.2 | 2026-01-23 | 1663 | 1966 | 2028 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+SoloEngine+<version>&body=###%20Engine%20name%0ASoloEngine%0A%0A###%20Version%0A2.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-08 04:42:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "" [1663, 1639, 1773, 2026, 2176, 2273, 2866]
  line "STC (8.0+0.08s)" [1663, 1639, 1773, 2026, 2176, 2273, 2866]
  line "LTC (60.0+0.60s)" [1966, 1983, 2088, 2336, 2471, 2615, 3141]
  line "" [2028, 2080, 2207, 2445, 2607, 2757, 3237]
  line "VLTC (2m24s+1.12s)" [2028, 2080, 2207, 2445, 2607, 2757, 3237]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3237 | 27 | 376 | 50% | 3236 | 63% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3141 | 28 | 362 | 53% | 3109 | 54% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2866 | 26 | 450 | 51% | 2851 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2757 | 27 | 436 | 52% | 2741 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2615 | 31 | 328 | 49% | 2619 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2273 | 31 | 348 | 52% | 2257 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2607 | 34 | 280 | 50% | 2603 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2471 | 32 | 332 | 51% | 2458 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2176 | 35 | 288 | 49% | 2194 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2445 | 30 | 380 | 48% | 2464 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2336 | 37 | 252 | 52% | 2319 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2026 | 35 | 288 | 54% | 1986 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2207 | 36 | 264 | 49% | 2215 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2088 | 40 | 206 | 53% | 2067 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1773 | 43 | 180 | 51% | 1763 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2080 | 40 | 204 | 52% | 2066 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1983 | 46 | 164 | 51% | 1978 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1639 | 42 | 208 | 47% | 1665 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2028 | 38 | 260 | 46% | 2098 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1966 | 43 | 204 | 46% | 2029 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1663 | 41 | 232 | 47% | 1719 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |