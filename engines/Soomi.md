# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2039<sub>(-4) | 2240<sub>(-86) | 2376<sub>(-62) |  |
| 1.2.0 | 2025-12-31 | 2043<sub>(+196) | 2326<sub>(+169) | 2438<sub>(+233) |  |
| 1.1.8 | 2025-12-16 | 1847<sub>(-11) | 2157<sub>(+44) | 2205<sub>(+42) |  |
| 1.1.7 | 2025-12-07 | 1858<sub>(+53) | 2113<sub>(-44) | 2163<sub>(-6) |  |
| 1.1.6 | 2025-11-30 | 1805 | 2157 | 2169 |  |
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

Generated: 2026-05-19 06:29:14

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1800 --> 2500
  line "STC (8.0+0.08s)" [1805, 1858, 1847, 2043, 2039]
  line "STC (8.0+0.08s)" [1805, 1858, 1847, 2043, 2039]
  line "LTC (60.0+0.60s)" [2157, 2113, 2157, 2326, 2240]
  line "VLTC (2m24s+1.12s)" [2169, 2163, 2205, 2438, 2376]
  line "VLTC (2m24s+1.12s)" [2169, 2163, 2205, 2438, 2376]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2376 | 34 | 296 | 49% | 2377 | 28% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2240 | 32 | 344 | 49% | 2241 | 21% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2039 | 32 | 356 | 49% | 2040 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2438 | 26 | 516 | 54% | 2403 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2326 | 27 | 460 | 50% | 2329 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2043 | 26 | 502 | 50% | 2043 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2205 | 45 | 180 | 47% | 2233 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2157 | 42 | 192 | 50% | 2157 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1847 | 47 | 164 | 48% | 1867 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2163 | 46 | 160 | 52% | 2152 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2113 | 46 | 160 | 53% | 2083 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1858 | 50 | 140 | 55% | 1804 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2169 | 50 | 152 | 43% | 2256 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2157 | 46 | 168 | 46% | 2199 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1805 | 60 | 104 | 48% | 1837 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |