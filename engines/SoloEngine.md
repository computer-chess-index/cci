# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2850<sub>(+new) | 3124<sub>(+new) | 3231<sub>(+new) |  |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2263<sub>(+98) | 2603<sub>(+143) | 2746<sub>(+150) |  |
| 1.6.0 | 2026-03-14 | 2165<sub>(+149) | 2460<sub>(+135) | 2596<sub>(+162) |  |
| 1.5.0 | 2026-03-04 | 2016<sub>(+254) | 2325<sub>(+247) | 2434<sub>(+239) |  |
| 1.4.0 | 2026-02-07 | 1762<sub>(+134) | 2078<sub>(+104) | 2195<sub>(+125) |  |
| 1.3.1 | 2026-02-01 | 1628<sub>(-26) | 1974<sub>(+18) | 2070<sub>(+52) |  |
| 1.2.2 | 2026-01-23 | 1654 | 1956 | 2018 |  |
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

Generated: 2026-08-02 06:29:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "STC (8.0+0.08s)" [1654, 1628, 1762, 2016, 2165, 2263, 2850]
  line "STC (8.0+0.08s)" [1654, 1628, 1762, 2016, 2165, 2263, 2850]
  line "LTC (60.0+0.60s)" [1956, 1974, 2078, 2325, 2460, 2603, 3124]
  line "VLTC (2m24s+1.12s)" [2018, 2070, 2195, 2434, 2596, 2746, 3231]
  line "VLTC (2m24s+1.12s)" [2018, 2070, 2195, 2434, 2596, 2746, 3231]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3231 | 28 | 332 | 51% | 3222 | 63% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3124 | 31 | 298 | 53% | 3090 | 53% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2850 | 27 | 402 | 51% | 2838 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2746 | 27 | 436 | 52% | 2728 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2603 | 31 | 328 | 49% | 2608 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2263 | 31 | 348 | 52% | 2246 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2596 | 34 | 280 | 50% | 2592 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2460 | 32 | 332 | 51% | 2448 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2165 | 35 | 288 | 49% | 2183 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2434 | 30 | 380 | 48% | 2453 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2325 | 37 | 252 | 52% | 2309 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2016 | 35 | 288 | 54% | 1975 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2195 | 36 | 264 | 49% | 2205 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2078 | 40 | 206 | 53% | 2056 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1762 | 43 | 180 | 51% | 1752 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2070 | 40 | 204 | 52% | 2055 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1974 | 46 | 164 | 51% | 1968 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1628 | 42 | 208 | 47% | 1654 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2018 | 38 | 260 | 46% | 2087 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1956 | 43 | 204 | 46% | 2018 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1654 | 41 | 232 | 47% | 1708 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |