# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2016<sub>(-2) | 2211<sub>(-93) | 2364<sub>(-53) |  |
| 1.2.0 | 2025-12-31 | 2018<sub>(+194) | 2304<sub>(+170) | 2417<sub>(+235) |  |
| 1.1.8 | 2025-12-16 | 1824<sub>(-11) | 2134<sub>(+44) | 2182<sub>(+42) |  |
| 1.1.7 | 2025-12-07 | 1835<sub>(+53) | 2090<sub>(-44) | 2140<sub>(-7) |  |
| 1.1.6 | 2025-11-30 | 1782 | 2134 | 2147 |  |
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

Generated: 2026-07-17 06:29:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1782, 1835, 1824, 2018, 2016]
  line "STC (8.0+0.08s)" [1782, 1835, 1824, 2018, 2016]
  line "LTC (60.0+0.60s)" [2134, 2090, 2134, 2304, 2211]
  line "VLTC (2m24s+1.12s)" [2147, 2140, 2182, 2417, 2364]
  line "VLTC (2m24s+1.12s)" [2147, 2140, 2182, 2417, 2364]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1782, 1835, 1824, 2018, 2016]
  line "STC (8.0+0.08s)" [1782, 1835, 1824, 2018, 2016]
  line "LTC (60.0+0.60s)" [2134, 2090, 2134, 2304, 2211]
  line "VLTC (2m24s+1.12s)" [2147, 2140, 2182, 2417, 2364]
  line "VLTC (2m24s+1.12s)" [2147, 2140, 2182, 2417, 2364]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2364 | 30 | 372 | 50% | 2358 | 28% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2211 | 30 | 408 | 48% | 2230 | 22% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2016 | 29 | 424 | 50% | 2016 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2417 | 26 | 516 | 54% | 2383 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2304 | 27 | 460 | 50% | 2306 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2018 | 26 | 502 | 50% | 2018 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2182 | 45 | 180 | 47% | 2210 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2134 | 42 | 192 | 50% | 2134 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1824 | 47 | 164 | 48% | 1843 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2140 | 46 | 160 | 52% | 2129 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2090 | 46 | 160 | 53% | 2060 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1835 | 50 | 140 | 55% | 1779 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2147 | 50 | 152 | 43% | 2234 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2134 | 46 | 168 | 46% | 2176 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1782 | 60 | 104 | 48% | 1814 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |