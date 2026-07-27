# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2849<sub>(+new) | 3123<sub>(+new) | 3231<sub>(+new) |  |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2263<sub>(+98) | 2603<sub>(+143) | 2746<sub>(+150) |  |
| 1.6.0 | 2026-03-14 | 2165<sub>(+149) | 2460<sub>(+135) | 2596<sub>(+162) |  |
| 1.5.0 | 2026-03-04 | 2016<sub>(+254) | 2325<sub>(+249) | 2434<sub>(+239) |  |
| 1.4.0 | 2026-02-07 | 1762<sub>(+134) | 2076<sub>(+104) | 2195<sub>(+127) |  |
| 1.3.1 | 2026-02-01 | 1628<sub>(-24) | 1972<sub>(+17) | 2068<sub>(+51) |  |
| 1.2.2 | 2026-01-23 | 1652 | 1955 | 2017 |  |
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

Generated: 2026-07-27 06:29:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "STC (8.0+0.08s)" [1652, 1628, 1762, 2016, 2165, 2263, 2849]
  line "STC (8.0+0.08s)" [1652, 1628, 1762, 2016, 2165, 2263, 2849]
  line "LTC (60.0+0.60s)" [1955, 1972, 2076, 2325, 2460, 2603, 3123]
  line "VLTC (2m24s+1.12s)" [2017, 2068, 2195, 2434, 2596, 2746, 3231]
  line "VLTC (2m24s+1.12s)" [2017, 2068, 2195, 2434, 2596, 2746, 3231]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3231 | 28 | 328 | 51% | 3221 | 63% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3123 | 31 | 290 | 53% | 3087 | 53% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2849 | 28 | 382 | 51% | 2835 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2746 | 27 | 436 | 52% | 2730 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2603 | 31 | 328 | 49% | 2608 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2263 | 31 | 348 | 52% | 2245 | 26% |
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
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2076 | 40 | 206 | 53% | 2055 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1762 | 43 | 180 | 51% | 1752 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2068 | 40 | 204 | 52% | 2053 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1972 | 46 | 164 | 51% | 1967 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1628 | 42 | 208 | 47% | 1654 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2017 | 38 | 260 | 46% | 2087 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1955 | 43 | 204 | 46% | 2018 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1652 | 41 | 232 | 47% | 1708 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |