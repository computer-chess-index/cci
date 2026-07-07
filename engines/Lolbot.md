# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2078<sub>(+65) | 2384<sub>(+155) | 2423<sub>(+117) |  |
| 0.2.3 | 2025-12-08 | 2013<sub>(+28) | 2229<sub>(-26) | 2306<sub>(+15) |  |
| 0.2.2 | 2025-11-29 | 1985<sub>(+64) | 2255<sub>(+81) | 2291<sub>(-19) |  |
| 0.2.1 | 2025-11-16 | 1921<sub>(-69) | 2174<sub>(-28) | 2310<sub>(-51) |  |
| 0.2 | 2025-11-15 | 1990<sub>(+new) | 2202<sub>(+new) | 2361<sub>(+new) |  |
| 0.1-alpha | 2025-03-29 |  |  |  |  |
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

Generated: 2026-07-07 06:26:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [1990, 1921, 1985, 2013, 2078]
  line "STC (8.0+0.08s)" [1990, 1921, 1985, 2013, 2078]
  line "LTC (60.0+0.60s)" [2202, 2174, 2255, 2229, 2384]
  line "VLTC (2m24s+1.12s)" [2361, 2310, 2291, 2306, 2423]
  line "VLTC (2m24s+1.12s)" [2361, 2310, 2291, 2306, 2423]
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
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [1990, 1921, 1985, 2013, 2078]
  line "STC (8.0+0.08s)" [1990, 1921, 1985, 2013, 2078]
  line "LTC (60.0+0.60s)" [2202, 2174, 2255, 2229, 2384]
  line "VLTC (2m24s+1.12s)" [2361, 2310, 2291, 2306, 2423]
  line "VLTC (2m24s+1.12s)" [2361, 2310, 2291, 2306, 2423]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2423 | 28 | 456 | 51% | 2406 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2384 | 28 | 460 | 52% | 2365 | 22% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2078 | 29 | 418 | 49% | 2078 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2306 | 31 | 362 | 48% | 2325 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2229 | 31 | 376 | 51% | 2214 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2013 | 28 | 468 | 49% | 2021 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2291 | 53 | 128 | 53% | 2261 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2255 | 66 | 76 | 51% | 2252 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 1985 | 59 | 104 | 49% | 1997 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2310 | 55 | 132 | 44% | 2385 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2174 | 64 | 88 | 46% | 2213 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1921 | 70 | 76 | 50% | 1921 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2361 | 56 | 116 | 52% | 2341 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2202 | 47 | 160 | 49% | 2215 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 1990 | 59 | 100 | 54% | 1949 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |