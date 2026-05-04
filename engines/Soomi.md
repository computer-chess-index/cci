# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2090<sub>(+18) | 2313<sub>(-52) | 2430<sub>(-47) |  |
| 1.2.0 | 2025-12-31 | 2072<sub>(+206) | 2365<sub>(+174) | 2477<sub>(+236) |  |
| 1.1.8 | 2025-12-16 | 1866<sub>(-8) | 2191<sub>(+49) | 2241<sub>(+45) |  |
| 1.1.7 | 2025-12-07 | 1874<sub>(+54) | 2142<sub>(-49) | 2196<sub>(-10) |  |
| 1.1.6 | 2025-11-30 | 1820 | 2191 | 2206 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Soomi+<version>&body=###%20Engine%20name%0ASoomi%0A%0A###%20Version%0A1.2.0B" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-04 06:28:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1800 --> 2500
  line "STC (8.0+0.08s)" [1820, 1874, 1866, 2072, 2090]
  line "STC (8.0+0.08s)" [1820, 1874, 1866, 2072, 2090]
  line "LTC (60.0+0.60s)" [2191, 2142, 2191, 2365, 2313]
  line "VLTC (2m24s+1.12s)" [2206, 2196, 2241, 2477, 2430]
  line "VLTC (2m24s+1.12s)" [2206, 2196, 2241, 2477, 2430]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2430 | 36 | 256 | 49% | 2435 | 30% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2313 | 37 | 268 | 51% | 2298 | 20% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2090 | 37 | 260 | 50% | 2091 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2477 | 26 | 516 | 54% | 2444 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2365 | 27 | 460 | 50% | 2368 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2072 | 26 | 502 | 50% | 2072 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2241 | 45 | 180 | 47% | 2269 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2191 | 42 | 192 | 50% | 2191 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1866 | 47 | 164 | 48% | 1886 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2196 | 46 | 160 | 52% | 2184 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2142 | 46 | 160 | 53% | 2113 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1874 | 50 | 140 | 55% | 1820 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2206 | 50 | 152 | 43% | 2292 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2191 | 46 | 168 | 46% | 2234 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1820 | 60 | 104 | 48% | 1854 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |