# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2885<sub>(+new) | 3120<sub>(+new) | 3254<sub>(+new) |  |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2264<sub>(+97) | 2603<sub>(+143) | 2743<sub>(+148) |  |
| 1.6.0 | 2026-03-14 | 2167<sub>(+149) | 2460<sub>(+133) | 2595<sub>(+161) |  |
| 1.5.0 | 2026-03-04 | 2018<sub>(+254) | 2327<sub>(+249) | 2434<sub>(+238) |  |
| 1.4.0 | 2026-02-07 | 1764<sub>(+133) | 2078<sub>(+103) | 2196<sub>(+126) |  |
| 1.3.1 | 2026-02-01 | 1631<sub>(-25) | 1975<sub>(+17) | 2070<sub>(+50) |  |
| 1.2.2 | 2026-01-23 | 1656 | 1958 | 2020 |  |
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

Generated: 2026-06-08 06:28:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "STC (8.0+0.08s)" [1656, 1631, 1764, 2018, 2167, 2264, 2885]
  line "STC (8.0+0.08s)" [1656, 1631, 1764, 2018, 2167, 2264, 2885]
  line "LTC (60.0+0.60s)" [1958, 1975, 2078, 2327, 2460, 2603, 3120]
  line "VLTC (2m24s+1.12s)" [2020, 2070, 2196, 2434, 2595, 2743, 3254]
  line "VLTC (2m24s+1.12s)" [2020, 2070, 2196, 2434, 2595, 2743, 3254]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3254 | 72 | 56 | 61% | 3150 | 54% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3120 | 81 | 50 | 67% | 2943 | 46% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2885 | 72 | 64 | 55% | 2815 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2743 | 27 | 436 | 52% | 2726 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2603 | 31 | 328 | 49% | 2607 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2264 | 31 | 348 | 52% | 2248 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2595 | 34 | 280 | 50% | 2591 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2460 | 32 | 332 | 51% | 2448 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2167 | 35 | 288 | 49% | 2184 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2434 | 30 | 380 | 48% | 2453 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2327 | 37 | 252 | 52% | 2311 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2018 | 35 | 288 | 54% | 1976 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2196 | 36 | 264 | 49% | 2206 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2078 | 40 | 206 | 53% | 2056 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1764 | 43 | 180 | 51% | 1755 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2070 | 40 | 204 | 52% | 2055 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1975 | 46 | 164 | 51% | 1970 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1631 | 42 | 208 | 47% | 1656 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2020 | 38 | 260 | 46% | 2088 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1958 | 43 | 204 | 46% | 2021 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1656 | 41 | 232 | 47% | 1710 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |