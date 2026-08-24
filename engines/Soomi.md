# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2036<sub>(+8) | 2237<sub>(-76) | 2373<sub>(-52) |  |
| 1.2.0 | 2025-12-31 | 2028<sub>(+195) | 2313<sub>(+169) | 2425<sub>(+234) |  |
| 1.1.8 | 2025-12-16 | 1833<sub>(-11) | 2144<sub>(+45) | 2191<sub>(+42) |  |
| 1.1.7 | 2025-12-07 | 1844<sub>(+53) | 2099<sub>(-45) | 2149<sub>(-7) |  |
| 1.1.6 | 2025-11-30 | 1791 | 2144 | 2156 |  |
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

Generated: 2026-08-24 06:29:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1791, 1844, 1833, 2028, 2036]
  line "STC (8.0+0.08s)" [1791, 1844, 1833, 2028, 2036]
  line "LTC (60.0+0.60s)" [2144, 2099, 2144, 2313, 2237]
  line "VLTC (2m24s+1.12s)" [2156, 2149, 2191, 2425, 2373]
  line "VLTC (2m24s+1.12s)" [2156, 2149, 2191, 2425, 2373]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2373 | 28 | 428 | 50% | 2369 | 26% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2237 | 29 | 440 | 49% | 2241 | 22% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2036 | 28 | 456 | 51% | 2025 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2425 | 26 | 516 | 54% | 2391 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2313 | 27 | 460 | 50% | 2315 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2028 | 26 | 502 | 50% | 2028 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2191 | 45 | 180 | 47% | 2219 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2144 | 42 | 192 | 50% | 2144 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1833 | 47 | 164 | 48% | 1852 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2149 | 46 | 160 | 52% | 2138 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2099 | 46 | 160 | 53% | 2070 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1844 | 50 | 140 | 55% | 1789 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2156 | 50 | 152 | 43% | 2244 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2144 | 46 | 168 | 46% | 2187 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1791 | 60 | 104 | 48% | 1825 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |