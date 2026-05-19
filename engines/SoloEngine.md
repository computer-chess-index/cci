# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2283<sub>(+97) | 2620<sub>(+143) | 2761<sub>(+149) |  |
| 1.6.0 | 2026-03-14 | 2186<sub>(+149) | 2477<sub>(+132) | 2612<sub>(+160) |  |
| 1.5.0 | 2026-03-04 | 2037<sub>(+254) | 2345<sub>(+247) | 2452<sub>(+237) |  |
| 1.4.0 | 2026-02-07 | 1783<sub>(+135) | 2098<sub>(+104) | 2215<sub>(+125) |  |
| 1.3.1 | 2026-02-01 | 1648<sub>(-26) | 1994<sub>(+18) | 2090<sub>(+51) |  |
| 1.2.2 | 2026-01-23 | 1674 | 1976 | 2039 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+SoloEngine+<version>&body=###%20Engine%20name%0ASoloEngine%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:29:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0"]
  y-axis "Elo Rating" 1600 --> 2800
  line "STC (8.0+0.08s)" [1674, 1648, 1783, 2037, 2186, 2283]
  line "STC (8.0+0.08s)" [1674, 1648, 1783, 2037, 2186, 2283]
  line "LTC (60.0+0.60s)" [1976, 1994, 2098, 2345, 2477, 2620]
  line "VLTC (2m24s+1.12s)" [2039, 2090, 2215, 2452, 2612, 2761]
  line "VLTC (2m24s+1.12s)" [2039, 2090, 2215, 2452, 2612, 2761]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2761 | 27 | 436 | 52% | 2745 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2620 | 31 | 328 | 49% | 2626 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2283 | 31 | 348 | 52% | 2267 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2612 | 34 | 280 | 50% | 2608 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2477 | 32 | 332 | 51% | 2466 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2186 | 35 | 288 | 49% | 2203 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2452 | 30 | 380 | 48% | 2471 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2345 | 37 | 252 | 52% | 2329 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2037 | 35 | 288 | 54% | 1997 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2215 | 36 | 264 | 49% | 2225 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2098 | 40 | 206 | 53% | 2076 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1783 | 43 | 180 | 51% | 1774 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2090 | 40 | 204 | 52% | 2075 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1994 | 46 | 164 | 51% | 1989 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1648 | 42 | 208 | 47% | 1674 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2039 | 38 | 260 | 46% | 2109 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1976 | 43 | 204 | 46% | 2040 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1674 | 41 | 232 | 47% | 1728 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |